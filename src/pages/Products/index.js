import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { SContainer, SCardWrapper } from './styles'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { getBooks } from '../../store/actions/booksActions'

function Products(props) {
    console.log(props)
    useEffect(() => {
        props.getBooks()
    }, [])

    return (
        <SContainer>
            <Header title="Lista de livros" to="/" />
            <SCardWrapper>
                {props.books &&
                    props.books.map((book) => {
                        return (
                            <Card
                                key={book.id}
                                book={book}
                                label={'Reservar'}
                                to={`/product/${book.id}`}
                            />
                        )
                    })}
            </SCardWrapper>
        </SContainer>
    )
}

function mapStateToProps(state) {
    return {
        books: state.booksReducer.books
    }
}

export default connect(mapStateToProps, { getBooks })(Products)
