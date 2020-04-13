import React, {useState} from 'react'
import './PageHeader.css'
import CategoryButton from "./CategoryButton"
import data, {categoriesUnique} from './badge-data';


export default function PageHeader(props) {
    const [selectedCategory, setSelectedCategory] = useState("")
    return (
        <div className="PageHeader">
            <header>
                <h1>Make School Bagdes</h1>
                <img src='./images/makeschool.jpg' height="60"/>
            </header>
        </div>
    )
}