import style from './index.module.css'

export const AppLayout = (page) => {
  return (
    <>
      <main className={style.blue}>{page}</main>
    </>
  )
}
