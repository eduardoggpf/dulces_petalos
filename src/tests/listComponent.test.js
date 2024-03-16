import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListComponent from '../components/listComponent';

describe('ListComponent', () => {
    //mock data
    const mockData = [
        {
            id: 1,
            name: 'Rose',
            binomialName: 'Rosa indica',
            price: 10,
            imgUrl: 'rose.jpg'
        },
        {
            id: 2,
            name: 'Lily',
            binomialName: 'Lilium candidum',
            price: 8,
            imgUrl: 'lily.jpg'
        }
    ];

    //renders a normal list of products
    test('renders list of products', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve(mockData)
        });
    
        render(<ListComponent />);
    
        await waitFor(() => {
            expect(screen.getByText('Rose')).toBeInTheDocument();
            expect(screen.getByText('Rosa indica')).toBeInTheDocument();
            expect(screen.getByText('10€')).toBeInTheDocument();

            expect(screen.getByText('Lily')).toBeInTheDocument();
            expect(screen.getByText('Lilium candidum')).toBeInTheDocument();
            expect(screen.getByText('8€')).toBeInTheDocument();

            expect(screen.getByAltText('Rose Image')).toBeInTheDocument();
            expect(screen.getByAltText('Lily Image')).toBeInTheDocument();
        });
    });
    
    //checks if search bar filters correctly
    test('filters list of products by search term', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve(mockData)
        });

        render(<ListComponent />);

        const searchBar = screen.getByPlaceholderText('Busca por nombre');
        userEvent.type(searchBar, 'Rose');

        await waitFor(() => {
            expect(screen.getByText('Rose')).toBeInTheDocument();
            expect(screen.getByText('Rosa indica')).toBeInTheDocument();
            expect(screen.getByText('10€')).toBeInTheDocument();

            expect(screen.queryByText('Lily')).not.toBeInTheDocument();
            expect(screen.queryByText('Lilium candidum')).not.toBeInTheDocument();
            expect(screen.queryByText('8€')).not.toBeInTheDocument();
        });
    });
});