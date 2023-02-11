import HomePage from '../components/HomePage.js'


//data 
import tabs from '../data/tabs-data'
import articles from '../data/articles-data'
import faq from '../data/faq-tabs'



export default function Home(props) {
 
  return (
    <>
      <HomePage myTabsData={props.tabs} articles={props.articles} faq={faq}/>
    </> 
  ) 

} 



export async function getStaticProps () {
    return{
        props: {
            articles: articles, 
            tabs: tabs
        },
    }
} 