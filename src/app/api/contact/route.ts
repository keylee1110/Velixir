import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, phone, email, purchaseChannel, orderCode, message } = body

    // 1. Validation
    if (!fullName || !phone || !email || !purchaseChannel || !message) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng điền đầy đủ các thông tin bắt buộc.' },
        { status: 400 }
      )
    }

    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production'
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-22'
    const writeToken = process.env.SANITY_API_WRITE_TOKEN

    // 2. Check configuration
    if (!projectId || !writeToken) {
      console.error('Sanity configurations or SANITY_API_WRITE_TOKEN is missing.')
      
      // Do not silently fake success if it is not configured.
      return NextResponse.json(
        { 
          success: false, 
          error: 'Hệ thống tiếp nhận thông tin chưa được cấu hình. Vui lòng thử lại sau hoặc liên hệ trực tiếp.' 
        },
        { status: 500 }
      )
    }

    // 3. Initialize write client
    const writeClient = createClient({
      projectId,
      dataset,
      apiVersion,
      token: writeToken,
      useCdn: false, // Must be false for writes
    })

    // 4. Create document in Sanity
    await writeClient.create({
      _type: 'contactSubmission',
      fullName,
      phone,
      email,
      purchaseChannel,
      orderCode: orderCode || '',
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.' },
      { status: 500 }
    )
  }
}
