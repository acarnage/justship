import type { Config } from 'drizzle-kit';
export default {
	schema: './src/lib/server/database/schema.ts',
	out: './drizzle',
	driver: 'libsql',
	dbCredentials: {
		url: 'file:local.db'
	}
} satisfies Config;
