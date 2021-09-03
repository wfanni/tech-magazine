export default async function fetchNews(page) {
	const response = await fetch(`https://teapots-be.sloppy.zone/news/tech/${page}`)
	const news = await response.json();
	return news
}