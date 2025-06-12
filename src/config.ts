import type { ExpressiveCodeConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from './types/config';
import { LinkPreset } from './types/config';

export const siteConfig: SiteConfig = {
	title: 'AI Blog Pro',
	subtitle: 'Khám phá thế giới AI & Machine Learning',
	lang: 'en', // Keep as 'en' for better compatibility with markdown content
	themeColor: {
		hue: 210, // Professional blue theme
		fixed: false, // Allow visitors to customize theme color
	},
	banner: {
		enable: false, // Temporarily disable until we add images
		src: 'assets/images/ai-banner.jpg', // We'll need to add an AI-themed banner image
		position: 'center',
		credit: {
			enable: false,
			text: '',
			url: '',
		},
	},
	toc: {
		enable: true, // Keep table of contents enabled
		depth: 3, // Show deeper heading levels for technical content
	},
	favicon: [
		// We can add custom favicon later
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: 'Categories',
			url: '/categories/', // Fixed: Add trailing slash for Astro config
			external: false,
		},
		{
			name: 'Tags',
			url: '/tags/', // Fixed: Add trailing slash for Astro config
			external: false,
		},
		LinkPreset.About,
		{
			name: 'GitHub',
			url: 'https://github.com/Hung2124/blog',
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: 'assets/images/new-avatar.png', // New AI logo
	name: 'AI Blog Pro Team',
	bio: 'AI Journey of AIO 2025 - Khám phá hành trình trí tuệ nhân tạo, từ những bước đầu đến tương lai công nghệ.',
	links: [
		{
			name: 'GitHub',
			icon: 'fa6-brands:github',
			url: 'https://github.com/Hung2124/blog',
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: 'CC BY-NC-SA 4.0',
	url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Dark theme for better code readability in technical blog
	theme: 'github-dark',
};
