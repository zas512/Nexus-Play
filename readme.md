# NexusPlay

NexusPlay is a modern, multiplayer gaming platform built with Next.js 15, featuring a sleek dark mode interface and seamless authentication. It offers a variety of classic games in a user-friendly, responsive design.

## Features

- 🎮 Multiple game options (Tic Tac Toe, Chess, Four in a Row, etc.)
- 🌓 Dark mode by default
- 🔐 Secure authentication with Google Sign-In
- 🚀 Built with Next.js 15 for optimal performance
- 💾 Data persistence with Supabase
- 🎨 Sleek animations powered by Framer Motion

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- **Node.js**: Version 18.x or later
- **npm or yarn**: Installed for package management
- **Google Cloud Platform**: Account for configuring Google Sign-In
- **Supabase**: Account for backend and database setup

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/nexusplay.git
   cd nexusplay
   ```

2. **Install dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the project root with the following variables:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   Or with yarn:

   ```bash
   yarn dev
   ```

5. **Open in your browser**:
   Visit `http://localhost:3000` to see the app running locally.

### Deployment

#### Vercel Deployment

1. Log in to your [Vercel](https://vercel.com/) account.
2. Link your GitHub repository to Vercel.
3. Set up the environment variables in the Vercel dashboard under **Project Settings > Environment Variables**.
4. Deploy the project with a single click.

#### Other Hosting Platforms

If you prefer other platforms, ensure you:

- Configure the environment variables in the deployment platform.
- Follow platform-specific instructions for deploying a Next.js app.

### Usage

1. Sign in with your Google account to access the gaming platform.
2. Choose a game from the available options (Tic Tac Toe, Chess, Four in a Row, etc.).
3. Play with friends or challenge the AI, depending on the game.

## Tech Stack

- **Frontend**: Next.js 15, Tailwind CSS, Framer Motion
- **Backend**: Supabase for database and authentication
- **Authentication**: Google Sign-In
- **Hosting**: Vercel

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the open-source community for tools and libraries used in this project.
- Built with ❤️ by Zain.

---

Enjoy NexusPlay and have fun gaming!
