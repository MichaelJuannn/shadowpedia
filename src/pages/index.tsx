import styles from "../../styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import valorant from "../../public/valorant.svg"
import dota from "../../public/dota2.svg"

export default function Home() {
  return (
    <>
      <div className="flex justify-center ">
        <Link href={"/valorant"} className="">
          <Image src={valorant} alt={"valorant logo"} width={300}></Image>
        </Link>
      </div>
      <div>
        <p className={`bg-base-300 p-5 notlg:w-1/2 ${styles.fade}`}>
          Shadowpedia gives you access to many information about popular games like Valorant.
          For now, I just provide information about agents. I'm excited to bring you more content, You can contact me
          for more information or collaboration 🐢 ♥
        </p>
      </div>
    </>
  )
}
