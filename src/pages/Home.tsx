import { Header } from '../components/Header'

import styles from './home.module.scss'

const USER_MOCK = {
  username: 'Leonardo Vargas',
  balance: 45000,
  invested: 27452
}

export function HomePage () {
  return (
    <div>
      <Header
        username={USER_MOCK.username}
        balance={USER_MOCK.balance}
        invested={USER_MOCK.invested}
      />

      <main>
          <div className={styles.main_container}>

              <div className={styles.main_coluna}>
                  <h2>Meus Investimentos por tipo</h2>
                  <div className={styles.main_card}>
                      <div className={styles.main_grafico}>
                          <span>100%</span>
                      </div>
                      <div className={styles.main_descricao_grafico}>
                          <span className={styles.primeira_tag}>Renda Fixa</span>
                          <span className={styles.segunda_tag}>Renda Variável</span>
                          <span className={styles.terceira_tag}>Fundos</span>
                          <span className={styles.quarta_tag}>Ofertas Públicas</span>
                      </div>
                  </div>
              </div>

              <div className={styles.main_coluna}>
                  <h2>Meus Investimentos por tipo</h2>
                  <div className={styles.main_card}>
                      <div className={styles.main_grafico}>
                          <span>100%</span>
                      </div>
                      <div className={styles.main_descricao_grafico}>
                          <span className={styles.primeira_tag}>Renda Fixa</span>
                          <span className={styles.segunda_tag}>Renda Variável</span>
                          <span className={styles.terceira_tag}>Fundos</span>
                          <span className={styles.quarta_tag}>Ofertas Públicas</span>
                      </div>
                  </div>
              </div>

              <div className={styles.main_coluna}>
                  <button>Meus Investimentos</button>
                  <button>Investir</button>
              </div>

          </div>
      </main>
    </div>
  )
}
