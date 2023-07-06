import React, { useState } from 'react'
import Button from './Button'
import ListBooks from './ListBooks'

const collections = [
    {
        id:1,
        name: "La Ley",
        testament:'Antiguo Testamento',
        books:[
            {id:1, name:"Genesis"},
            {id:2, name:"Exodo"},
            {id:3, name:"Levitico"},
            {id:4, name:"Numeros"},
            {id:5, name:"Deuteronomio"},
        ]
    },
    {
        id:2,
        name: "Historicos",
        testament:'Antiguo Testamento',
        books:[
            {id:1, name:"Josue"},
            {id:2, name:"Jueces"},
            {id:3, name:"Rut"},
            {id:4, name:"1 Samuel"},
            {id:5, name:"2 Samuel"},
            {id:6, name:"1 Reyes"},
            {id:7, name:"2 Reyes"},
            {id:8, name:"1 Cronicas"},
            {id:9, name:"2 Cronicas"},
            {id:10, name:"Esdras"},
            {id:11, name:"Nehemias"},
            {id:12, name:"Ester"},
        ]
    },
    {
        id:3,
        name: "Poéticos y de Sabiduria",
        testament:'Antiguo Testamento',
        books:[
            {id:1, name:"Job"},
            {id:2, name:"Salmos"},
            {id:3, name:"Proverbios"},
            {id:4, name:"Eclesiastes"},
            {id:5, name:"Cantares"},
        ]
    },
    {
        id:4,
        name: "Profetas Mayores",
        testament:'Antiguo Testamento',
        books:[
            {id:1, name:"Isaías"},
            {id:2, name:"Jeremías"},
            {id:3, name:"Lamentaciones"},
            {id:4, name:"Ezequiel"},
            {id:5, name:"Daniel"},
        ]
    },
    {
        id:5,
        name: "Profetas Menores",
        testament:'Antiguo Testamento',
        books:[
            {id:1, name:"Oseas"},
            {id:2, name:"Joel"},
            {id:3, name:"Amos"},
            {id:4, name:"Abdías"},
            {id:5, name:"Jonás"},
            {id:6, name:"Miqueas"},
            {id:7, name:"Nahum"},
            {id:8, name:"Nabacuc"},
            {id:9, name:"Sofonías"},
            {id:10, name:"Hageo"},
            {id:11, name:"Zacarías"},
            {id:13, name:"Malaquías"},
        ]
    },
    {
        id:6,
        name: "Evagenlicos",
        testament:'Nuevo Testamento',
        books:[
            {id:1, name:"San Mateo"},
            {id:2, name:"San Marcos"},
            {id:3, name:"San Lucas"},
            {id:4, name:"San Marcos"},
        ]
    },
    {
        id:7,
        name: "Cartas Paulinas",
        testament:'Nuevo Testamento',
        books:[
            {id:1, name:"Romanos"},
            {id:2, name:"1 Corintios"},
            {id:3, name:"2 Corintios"},
            {id:4, name:"Gálatas"},
            {id:5, name:"Efesios"},
            {id:6, name:"Filipenses"},
            {id:7, name:"Colosenses"},
            {id:8, name:"1 Tesalonicenses"},
            {id:9, name:"2 Tesalonicenses"},
            {id:10, name:"1 Timoteo"},
            {id:11, name:"2 Timoteo"},
            {id:12, name:"Tito"},
            {id:13, name:"Filemon"},
        ]
    },
    {
        id:8,
        name: "Cartas Generales",
        testament:'Nuevo Testamento',
        books:[
            {id:1, name:"Hebreos"},
            {id:2, name:"Santiago"},
            {id:3, name:"1 Pedro"},
            {id:4, name:"2 Pedro"},
            {id:5, name:"1 Juan"},
            {id:6, name:"2 Juan"},
            {id:7, name:"3 Juan"},
            {id:8, name:"Judas"},
        ]
    },
    {
        id:9,
        name: "Historicos Apostolicos",
        testament:'Nuevo Testamento',
        books:[
            {id:1, name:"Hechos"}
        ]
    },
    {
        id:10,
        name: "Profeticos",
        testament:'Nuevo Testamento',
        books:[
            {id:1, name:"Apocalipsís"}
        ]
    },
]

const CollectionBooks = () => {
    const [list, setList] = useState([])

    const handleSelectCollection = (IdCollection)=>{
        let result = collections.filter(item => item.id === IdCollection)
        setList(result[0].books)
    }

  return (
    <div>
        {
            collections.map(btn =>(
                <Button key={btn.id} text={btn.name} onClick={id =>handleSelectCollection(btn.id)} />
            ))
        }

        <ListBooks list={list} />

    </div>
  )
}

export default CollectionBooks