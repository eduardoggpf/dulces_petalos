import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DetailComponent from '../components/detailComponent';

describe('DetailComponent', () => {
    //Test if the component renders correctly with proper data
    test('renders with flower data', () => {
    const flowerData = {
        name: 'Rose',
        binomialName: 'Rosa indica',
        price: 10,
        wateringsPerWeek: 2,
        fertilizerType: 'Phosphate',
        heightInCm: 30,
        imgUrl: 'rose.jpg'
    };

    render(<DetailComponent flower={flowerData} />);

    expect(screen.getByText('Rose')).toBeInTheDocument();
    expect(screen.getByText('Rosa indica')).toBeInTheDocument();
    expect(screen.getByText('Precio: 10 $')).toBeInTheDocument();
    expect(screen.getByText('Riegos semanales: 2')).toBeInTheDocument();
    expect(screen.getByText('Tipos de fertilizante: Fosforado')).toBeInTheDocument();
    expect(screen.getByText('Altura en cm: 30')).toBeInTheDocument();
    expect(screen.getByAltText('Flower Image')).toBeInTheDocument();
});

    //check what might happen if the data is null, undefined or empty
    test('renders "Producto no encontrado" if flower data is null', () => {
        render(<DetailComponent flower={null} />);

        expect(screen.getByText('Producto no encontrado')).toBeInTheDocument();
    });

    test('renders "Producto no encontrado" if flower data is undefined', () => {
        render(<DetailComponent flower={undefined} />);

        expect(screen.getByText('Producto no encontrado')).toBeInTheDocument();
    });

    test('renders "Producto no encontrado" if flower data is empty', () => {
        render(<DetailComponent flower={{}} />);

        expect(screen.getByText('Producto no encontrado')).toBeInTheDocument();
    });

  //check if the back button redirects to home
    test('clicking back button redirects to home', () => {
        const flowerData = {
            name: 'Rose',
            binomialName: 'Rosa indica',
            price: 10,
            wateringsPerWeek: 2,
            fertilizerType: 'Phosphate',
            heightInCm: 30,
            imgUrl: 'rose.jpg'
        };

        render(<DetailComponent flower={flowerData} />);
        const backButton = screen.getByRole('button', { name: 'Back' });
        userEvent.click(backButton);

        expect(window.location.href).toBe('http://localhost/');
    });
});