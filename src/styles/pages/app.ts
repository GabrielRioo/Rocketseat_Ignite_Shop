import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',

    span: {
        fontWeight: 'bold',
    },

    '&:hover': {
        filter: 'brightness(0.8)',
    }
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',
})