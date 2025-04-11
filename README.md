# Wealth Atlas - Personal Finance Management App

Wealth Atlas is a modern web application for managing personal finances, investments, goals, and loans. Built with Next.js and GraphQL, it provides a comprehensive view of your financial health.

## Features

- **Dashboard**: Overview of all financial aspects
- **Investments**: Track and analyze investment portfolios
- **Goals**: Set and monitor financial goals
- **Expenses**: Track and categorize expenses
- **Loans**: Manage loan accounts and payments
- **Authentication**: Secure email/password login
- **Data Visualization**: Interactive charts for financial insights

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Apollo Client, React Query
- **Charts**: Recharts
- **Authentication**: JWT-based auth
- **API**: GraphQL

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wealth-atlas.git
cd wealth-atlas
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration:
```
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── investments/       # Investment management
│   ├── goals/            # Financial goals
│   ├── expenses/         # Expense tracking
│   └── loans/            # Loan management
├── components/            # Reusable components
│   ├── charts/           # Data visualization
│   ├── layout/           # Layout components
│   └── ui/               # UI components
└── lib/                  # Utilities and configurations
    ├── apollo-client.ts  # GraphQL client setup
    └── auth.ts           # Authentication logic
```

## Development

- The app uses Next.js App Router for routing
- GraphQL for API communication
- Protected routes for authenticated access
- Responsive design with Tailwind CSS
- Interactive charts with Recharts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
