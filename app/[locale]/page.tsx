import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p className="mt-2 text-neutral-600">{t("subtitle")}</p>
      <Image src="/images/home.jpg" alt="Home" className="w-full h-full object-cover" width={1000} height={1000}  loading="lazy"/>
      <Link href="/products"prefetch={true} >Products</Link>
    </div>
  );
}
