export default function PageMetaData({
  title = "FreshCart",
  description = "Freshcart - Your one-stop shop for all things fresh",
  keywords = "fresh, groceries, online shopping, delivery",
  author = "Freshcart",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
