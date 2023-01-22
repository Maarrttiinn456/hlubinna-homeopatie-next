import ArticlesDetail from '../../components/ArticlesDetail'

//data
import articles from '../../data/articles-data' 

const Clanek = (props) => {
    return(
       <ArticlesDetail articles={props.myArticles}/>
    )
}

export async function getStaticPaths () {
    const paths = articles.map((oneArticle) => {
        return {
          params: {
            clanek: oneArticle.path,
          }
        }
      });
     
    return {
        paths,
        fallback: false
    } 
}
 
export async function getStaticProps (context) {
    return{
        props: {
            myArticles: articles
        }
    }
}



export default Clanek  