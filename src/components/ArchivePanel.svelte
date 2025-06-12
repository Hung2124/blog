<script lang="ts">
import { onMount } from 'svelte';

import I18nKey from '../i18n/i18nKey';
import { i18n } from '../i18n/translation';
import { getPostUrlBySlug } from '../utils/url-utils';

export let sortedPosts: any[] = [];
export let tags: string[] = [];
export let categories: string[] = [];
export let uncategorized: string | null = null;

interface Post {
	slug: string;
	data: {
		title: string;
		tags: string[];
		category?: string;
		published: Date;
	};
}

interface Group {
	year: number;
	posts: Post[];
}

let groups: Group[] = [];

function formatDate(date: Date | string) {
	const d = new Date(date);
	const month = (d.getMonth() + 1).toString().padStart(2, '0');
	const day = d.getDate().toString().padStart(2, '0');
	return `${month}-${day}`;
}

function formatTag(tagList: string[]) {
	if (!Array.isArray(tagList)) return '';
	return tagList.map((t) => `#${t}`).join(' ');
}

onMount(async () => {
	// Parse query parameters from client-side URL
	const urlParams = new URLSearchParams(window.location.search);
	const clientTags = urlParams.has('tag') ? urlParams.getAll('tag') : [];
	const clientCategories = urlParams.has('category') ? urlParams.getAll('category') : [];
	const clientUncategorized = urlParams.get('uncategorized');
	
	// Use client-side parsed parameters (fallback to server-side)
	const activeTags = clientTags.length > 0 ? clientTags : tags;
	const activeCategories = clientCategories.length > 0 ? clientCategories : categories;
	const activeUncategorized = clientUncategorized || uncategorized;
	
	let filteredPosts: any[] = sortedPosts;

	if (activeTags.length > 0) {
		filteredPosts = filteredPosts.filter(
			(post) => Array.isArray(post.data.tags) && post.data.tags.some((tag: string) => activeTags.includes(tag)),
		);
	}

	if (activeCategories.length > 0) {
		filteredPosts = filteredPosts.filter((post) => post.data.category && activeCategories.includes(post.data.category));
	}

	if (activeUncategorized) {
		filteredPosts = filteredPosts.filter((post) => !post.data.category);
	}

	const grouped = filteredPosts.reduce(
		(acc, post) => {
			const publishedDate = new Date(post.data.published);
			const year = publishedDate.getFullYear();
			if (!acc[year]) {
				acc[year] = [];
			}
			acc[year].push(post);
			return acc;
		},
		{} as Record<number, Post[]>,
	);

	const groupedPostsArray = Object.keys(grouped).map((yearStr) => ({
		year: Number.parseInt(yearStr),
		posts: grouped[Number.parseInt(yearStr)],
	}));

	groupedPostsArray.sort((a, b) => b.year - a.year);

	groups = groupedPostsArray;
});
</script>

<div class="card-base px-8 py-6">
    {#if groups.length === 0}
        <div class="text-center py-12">
            <p class="text-50 text-lg">No posts found</p>
            <p class="text-30 text-sm mt-2">Total posts available: {sortedPosts.length}</p>
        </div>
    {:else}
        {#each groups as group}
            <div>
                <div class="flex flex-row w-full items-center h-[3.75rem]">
                    <div class="w-[15%] md:w-[10%] transition text-2xl font-bold text-right text-75">
                        {group.year}
                    </div>
                    <div class="w-[15%] md:w-[10%]">
                        <div
                                class="h-3 w-3 bg-none rounded-full outline outline-[var(--primary)] mx-auto
                      -outline-offset-[2px] z-50 outline-3"
                        ></div>
                    </div>
                    <div class="w-[70%] md:w-[80%] transition text-left text-50">
                        {group.posts.length} {i18n(I18nKey.postsCount)}
                    </div>
                </div>

            {#each group.posts as post}
                <a
                        href={getPostUrlBySlug(post.slug)}
                        aria-label={post.data.title}
                        class="group btn-plain !block h-10 w-full rounded-lg hover:text-[initial]"
                >
                    <div class="flex flex-row justify-start items-center h-full">
                        <!-- date -->
                        <div class="w-[15%] md:w-[10%] transition text-sm text-right text-50">
                            {formatDate(post.data.published)}
                        </div>

                        <!-- dot and line -->
                        <div class="w-[15%] md:w-[10%] relative dash-line h-full flex items-center">
                            <div
                                    class="transition-all mx-auto w-1 h-1 rounded group-hover:h-5
                       bg-[oklch(0.5_0.05_var(--hue))] group-hover:bg-[var(--primary)]
                       outline outline-4 z-50
                       outline-[var(--card-bg)]
                       group-hover:outline-[var(--btn-plain-bg-hover)]
                       group-active:outline-[var(--btn-plain-bg-active)]"
                            ></div>
                        </div>

                        <!-- post title -->
                        <div
                                class="w-[70%] md:max-w-[65%] md:w-[65%] text-left font-bold
                     group-hover:translate-x-1 transition-all group-hover:text-[var(--primary)]
                     text-75 pr-8 whitespace-nowrap overflow-ellipsis overflow-hidden"
                        >
                            {post.data.title}
                        </div>

                        <!-- tag list -->
                        <div
                                class="hidden md:block md:w-[15%] text-left text-sm transition
                     whitespace-nowrap overflow-ellipsis overflow-hidden text-30"
                        >
                            {formatTag(post.data.tags)}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    {/each}
    {/if}
</div>
