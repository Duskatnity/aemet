class FetchButton extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .fetch-button {
          background-color: white;
          border-radius: 3rem;
          padding: 2rem 3rem;
          font-size: 2rem;
        }

        .fetch-button:hover{
          cursor: pointer;
          background-color: lightgray;
        }

        .fetch-button:active{
          background-color: white;
        }
      </style>

      <button class="fetch-button">Fetch data</button>
      `

    const button = this.shadow.querySelector('.fetch-button')

    button.addEventListener('click', async () => {
      try {
        // Primera solicitud fetch
        let response = await fetch('https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2024-02-01T00:00:00UTC/fechafin/2024-08-01T23:59:59UTC/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4LmJlcm5hdDk5QGdtYWlsLmNvbSIsImp0aSI6IjgyOGM5MjEwLTMwZTEtNDRmZS05NzNlLTg3YmVjZjg3N2UwZiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzIyODQyNDk2LCJ1c2VySWQiOiI4MjhjOTIxMC0zMGUxLTQ0ZmUtOTczZS04N2JlY2Y4NzdlMGYiLCJyb2xlIjoiIn0.uG4i9HIbH_C2KK80PIsmxZMiMdjMLEAGgRZGJzGlvjw')

        if (!response.ok) {
          throw new Error('Error en la primera solicitud')
        }

        let data = await response.json()

        const urlDatos = data.datos

        response = await fetch(urlDatos)

        if (!response.ok) {
          throw new Error('Error en la segunda solicitud')
        }

        data = await response.json()

        data = data.map(item => {
          return Object.fromEntries(
            Object.entries(item).map(([key, value]) => {
              if (typeof value === 'string') {
                value = value.replace(/,/g, '.')
              }
              return [key, value]
            })
          )
        })

        response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/weathers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      } catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error)
      }
    })
  }
}

customElements.define('fetch-button-component', FetchButton)
