import { render, screen } from '@testing-library/react'

import WhatsapButton from '.'

describe('<WhatsapButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<WhatsapButton />)

    expect(
      screen.getByRole('heading', { name: /WhatsapButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
