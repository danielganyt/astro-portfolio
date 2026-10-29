// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/** Prefix a site-root path with the configured `base` so links work under a sub-path deploy. */
export const withBase = (path: string) =>
	`${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const SITE_TITLE = 'Daniel Gan';
export const SITE_DESCRIPTION = 'Engineering notes on building a planning and analytics product: .NET, Angular, cubes and the mistakes along the way.';
