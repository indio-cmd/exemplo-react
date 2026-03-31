import './style.css'

function List() {
    return(
 <section>
      <h2 id='exemplo-h2' > Seção de listar</h2>

      <h3>Lista nao ordenada</h3>
      <ul id='ul' >
        <li>Batata</li>
        <li>Põa</li>
        <li>Arroz</li>
      </ul>

      <h3>Lista ordenada</h3>
      <ol>
        <li>Rotiwels</li>
        <li>Barbye</li>
        <li>Poquemon</li>
      </ol>


    </section>

    )
}

export default List