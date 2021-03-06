import { render, cleanup, screen } from '@testing-library/react'
import NotFound from './index'

afterEach(cleanup)
render(<NotFound />)

describe('Completely render <NotFound />', () => {
  test('render the NotFound component without crashing', () => {
    expect(screen.getAllByTestId('not_found_wrapper')).toHaveLength(1)
  })
})
