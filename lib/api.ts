// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// async function fetchStrapi(endpoint: string, options: RequestInit = {}) {
//     const res = await fetch(`${STRAPI_URL}${endpoint}`, {
//         ...options,
//         headers: {
//             'Content-Type': 'application/json',
//             ...options.headers,
//         },
//     });

//     if (!res.ok) {
//         throw new Error(`Failed to fetch from Strapi: ${res.statusText}`);
//     }

//     const data = await res.json();
//     return data;
// }

// Helpers for specific content types
// export async function getBlogs() {
//     const data = await fetchStrapi('/api/mbs-blogs?populate=*');
//     return data.data; // Strapi wraps results in a 'data' array
// }

// export async function getBlogBySlug(slug: string) {
//     const data = await fetchStrapi(`/api/mbs-blogs?filters[slug][$eq]=${slug}&populate=*`);
//     return data.data[0];
// }

// export async function getServices() {
//     const data = await fetchStrapi('/api/mbs-services?populate=*');
//     return data.data;
// }

// export async function getTestimonials() {
//     const data = await fetchStrapi('/api/mbs-testimonials?populate=*');
//     return data.data;
// }

export async function submitEnquiry(formData: any) {
    try {
        // Transform form data to match API expectations
        const transformedData = {
            fullName: formData.name || formData.fullName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            token: formData.token
        };

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transformedData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to submit enquiry');
        }

        return await response.json();
    } catch (error) {
        console.error('Submit enquiry error:', error);
        throw error;
    }
}
