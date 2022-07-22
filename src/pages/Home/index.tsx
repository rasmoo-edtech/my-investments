import { Layout } from '../../components/Layout'
import { ButtonLink } from '../../components/ButtonLink'

import styles from './styles.module.scss'

export function HomePage () {
  return (
    <Layout>
        <div className={styles.content}>
            <div className={styles.content__box}>
                <h2>Meus Investimentos por tipo</h2>

                <div className={styles.card}>
                    <div className={styles.card__graph}>
                        <span>100%</span>
                    </div>
                    <div className={styles.card__description}>
                        <span>Renda Fixa</span>
                        <span>Renda Variável</span>
                        <span>Fundos</span>
                        <span>Ofertas Públicas</span>
                    </div>
                </div>
            </div>

            <div className={styles.content__box}>
                <h2>Meus Investimentos por categoria</h2>

                <div className={styles.card}>
                    <div className={styles.card__graph}>
                        <span>100%</span>
                    </div>
                    <div className={styles.card__description}>
                        <span>Renda Fixa</span>
                        <span>Renda Variável</span>
                        <span>Fundos</span>
                        <span>Ofertas Públicas</span>
                    </div>
                </div>
            </div>

            <div className={styles.content__box}>
                <ButtonLink to="/meus-investimentos">
                    Meus Investimentos
                </ButtonLink>
                <ButtonLink to="/investir">
                    Investir
                </ButtonLink>
            </div>
        </div>
    </Layout>
  )
}
