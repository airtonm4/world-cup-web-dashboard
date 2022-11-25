import { useState } from "react"
import api from "../../utils/api"

export const Root = () => {
  const [punters, setPunters] = useState<Array<any>>()

  const loadPunters = () => {
    api.get("/api/punter").then(
      (res) => {
        console.log(res.data)
        setPunters(res.data)
      }
    )
  }

  const dadJokes = () => {
    fetch('/api/dadjokes')
      .then(response => console.log(response))
  };

  /**
   * TODO: Preciso terminar isso antes de mandar marcha.
   */
  return (
    <div>
      <div>
        Root page
      </div>
      <div>
        <button onClick={() => loadPunters()}>Load punters</button>
      </div>
      <ul>
        {punters?.map(
          (element) => (
            <li>{element.name}</li>
          )
        )}
      </ul>
    </div>
  )
}