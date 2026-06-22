import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PolicyTabs from "@/components/PolicyTabs";
import { client } from "@/sanity/lib/client";
import { allPoliciesQuery, siteSettingsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Policies | Velixir Parfums",
  description: "Read the privacy, shipping, and return policies of Velixir Parfums.",
};

const fallbackPolicies = [
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    type: "privacy",
    content: `Chào mừng bạn đến với Velixir Parfums. Chúng tôi cam kết bảo vệ thông tin cá nhân và quyền riêng tư của bạn. 

1. Thu Thập Thông Tin
Chúng tôi chỉ thu thập các thông tin cá nhân tối thiểu khi bạn sử dụng biểu mẫu liên hệ hoặc đăng ký nhận bản tin, bao gồm: Họ tên, số điện thoại, email, và nội dung tin nhắn.

2. Sử Dụng Thông Tin
Thông tin của bạn được sử dụng riêng cho mục đích hỗ trợ tư vấn sản phẩm, giải đáp thắc mắc của khách hàng, hoặc liên hệ xác minh về chất lượng dịch vụ.

3. Bảo Mật
Velixir áp dụng các biện pháp bảo mật tối đa để bảo vệ dữ liệu cá nhân trước các hành vi truy cập trái phép hoặc phát tán thông tin.`,
  },
  {
    title: "Shipping Policy",
    slug: "shipping-policy",
    type: "shipping",
    content: `Velixir vận chuyển các đơn hàng trên toàn lãnh thổ Việt Nam thông qua các đối tác giao hàng uy tín.

1. Thời Gian Xử Lý
Các đơn đặt hàng thông qua kênh Shopee / TikTok Shop chính thức của chúng tôi sẽ được xử lý và giao cho đơn vị vận chuyển trong vòng 24 giờ làm việc.

2. Thời Gian Nhận Hàng
- Khu vực TP. Hồ Chí Minh: 1 - 2 ngày làm việc.
- Khu vực tỉnh/thành phố khác: 2 - 4 ngày làm việc.

3. Phí Vận Chuyển
Mức phí vận chuyển được hiển thị và tính toán tự động tại giao diện thanh toán của sàn thương mại điện tử tương ứng.`,
  },
  {
    title: "Return & Exchange Policy",
    slug: "return-policy",
    type: "returns",
    content: `Sự hài lòng của khách hàng là ưu tiên hàng đầu tại Velixir Parfums.

1. Điều Kiện Đổi Trả
- Sản phẩm được đổi trả trong vòng 7 ngày kể từ ngày nhận hàng thành công.
- Hộp sản phẩm, seal nilon và chai nước hoa phải còn nguyên vẹn, chưa qua sử dụng hoặc xịt thử.
- Có video khui hàng đầy đủ và rõ ràng từ lúc nhận từ bưu tá.

2. Quy Trình Đổi Trả
Quý khách vui lòng liên hệ trực tiếp với bộ phận chăm sóc khách hàng của Velixir tại kênh mua hàng Shopee/TikTok để được hỗ trợ nhanh nhất.`,
  },
];

export default async function PolicyPage() {
  let policies = [];
  let settingsData: any = null;

  try {
    const [pols, settings] = await Promise.all([
      client.fetch(allPoliciesQuery),
      client.fetch(siteSettingsQuery),
    ]);
    policies = pols || [];
    settingsData = settings;
  } catch (error) {
    console.warn("Failed to fetch policies from Sanity, using fallback:", error);
  }

  if (policies.length === 0) {
    policies = fallbackPolicies;
  }

  const shopeeUrl = settingsData?.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = settingsData?.tiktokUrl || "https://www.tiktok.com/";

  return (
    <>
      <AnnouncementBar />
      <Header transparent={false} shopeeUrl={shopeeUrl} tiktokUrl={tiktokUrl} />

      <main className="flex-grow pt-24 bg-primary-black overflow-hidden">
        {/* Page Hero */}
        <section className="py-16 md:py-24 bg-primary-black px-6 md:px-12 border-b border-muted-gray/10 text-center relative">
          <ScrollReveal direction="up" distance={30} className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Breadcrumbs */}
            <div className="flex gap-2 items-center text-[0.6rem] tracking-[0.2em] font-sans text-muted-gray uppercase mb-6">
              <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
              <span>/</span>
              <span className="text-champagne-gold">Policies</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] text-ivory mb-6 uppercase">
              POLICIES & TERMS
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-xs md:text-sm text-muted-gray tracking-widest font-light leading-relaxed max-w-xl">
              Read our brand guidelines regarding privacy protection, shipping conditions, and exchange support. At Velixir, we serve you with absolute integrity.
            </p>
          </ScrollReveal>
        </section>

        {/* Dynamic Content Panel */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <ScrollReveal direction="up" distance={35}>
            <PolicyTabs policies={policies} />
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
