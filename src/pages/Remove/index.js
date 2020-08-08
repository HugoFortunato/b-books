import React, { useState, useEffect } from 'react'
import db from '../../services/api'

import { SContainer, SCardWrapper } from './styles'
import Header from '../../components/Header'
import Card from '../../components/Card'

const bookRef = db.collection('books')

function Remove() {
    const [book, setBook] = useState([])

    useEffect(() => {
        bookRef.onSnapshot((docs) => {
            const booksTmp = []
            docs.forEach((doc) => {
                if (doc.data().reserved) {
                    booksTmp.push(doc.data())
                }
            })
            setBook(booksTmp)
        })
    }, [])

    const handleReserveBook = (id) => {
        if (!id) {
            return
        }

        bookRef
            .doc(id)
            .update({ reserved: false })
            .then(() => console.log('chegou aqui'))
            .catch(() => alert('Error to update Book'))
    }

    return (
        <SContainer>
            <Header to="/products" title="Seus livros reservados" />
            <SCardWrapper>
                {book.map((book) => {
                    return (
                        <Card
                            key={book.id}
                            book={book}
                            label={'Cancelar reserva'}
                            onClick={() => handleReserveBook(book.id)}
                        />
                    )
                })}
            </SCardWrapper>
        </SContainer>
    )
}

export default Remove
