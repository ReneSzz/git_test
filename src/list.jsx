export default function List() {
  
  const items = Animals.map(animal => 
    <li>{animal}</li>
    );
    return <ul> {items} </ul>;
}

