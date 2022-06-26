import { CustomNextPage } from 'next'
import { AppLayout } from 'src/pages-layout/AppLayout'

const Index: CustomNextPage = () => {
  return <h1>Next Typescript template</h1>
}

Index.getLayout = AppLayout
export default Index
