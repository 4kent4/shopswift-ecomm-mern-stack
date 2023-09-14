import {Helmet} from 'react-helmet-async'

const Meta = ({title, description, keyword}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name='keywords' content={keyword} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Welcome to ShopSwift",
  description: "We sell the best products",
  keywords: "electronics, buy electronics, cheap electronics"
}

export default Meta