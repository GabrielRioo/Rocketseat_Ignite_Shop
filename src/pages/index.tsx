import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { styled } from '../styles'
import { HomeContainer, Product } from '@/styles/pages/home'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt=''/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta1} width={520} height={480} alt=''/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
