import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Button from '../../components/Button'
import {
    SContainer,
    SCardWrapper,
    SImageWrapper,
    STitleWrapper
} from './styles'
import { getBook } from '../../store/actions/booksActions'
import db from '../../services/api'

const booksRef = db.collection('books')
const usersRef = db.collection('users')
const reservesRef = db.collection('reserves')

function Product(props) {
    console.log(props)
    useEffect(() => {
        props.getBook(props.books, props.match.params.id)
    }, [])

    const handleReserveBook = () => {
        if (!props.book.id) {
            return
        }

        const email = 'hugo@gmail.com'

        usersRef
            .where('email', '==', email)
            .get()
            .then((querySnapshot) => {
                booksRef
                    .doc(props.book.id)
                    .update({ ...props.book, reserved: true })
                    .then(() => {
                        props.history.push('/products')

                        reservesRef
                            .add({
                                userId: querySnapshot.docs[0].id,
                                bookId: props.book.id
                            })
                            .then(() => console.log('reservado com sucesso'))
                            .catch((error) => console.log(error))
                    })
                    .catch(() => alert('Error to update Book'))
            })
    }

    return (
        <SContainer>
            <Header title={'Reserve o seu livro'} to="/products" />
            {props.book && (
                <SCardWrapper>
                    <SImageWrapper>
                        <img src={props.book.url} alt="Reserve" />
                    </SImageWrapper>
                    <STitleWrapper>
                        <span>{props.book.title}</span>
                        <span className="textone">
                            {props.book.description}
                        </span>
                        <Button
                            label={'RESERVE AQUI!'}
                            onClick={handleReserveBook}
                        />
                    </STitleWrapper>
                </SCardWrapper>
            )}
        </SContainer>
    )
}

function mapStateToProps(state) {
    return {
        books: state.booksReducer.books,
        book: state.booksReducer.book
    }
}

export default connect(mapStateToProps, { getBook })(Product)
