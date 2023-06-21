
const baseUrl = process.env.baseUrl;

export async function getProjects() {
  const response = await fetch(
    `${baseUrl}/api/projects?fields=title,description,slug,excerpt,technologies&populate=images,categories`
  );

  const { data } = await response.json();

  // const projectData = data["data"];

  const result = data.map((val) => {
    const images = val.attributes.images.data.map((img) => {
      return {
        imgUrl: img.attributes.url,
        // publicId: img.attributes.provider_metadata.public_id,
      };
    });
    const categories = val.attributes.categories.data.map(
      (category) => category.attributes.name
    );

    
    const res = {
      title: val.attributes.title,
      slug: val.attributes.slug,
      description:val.attributes.description,
      excerpt:val.attributes.excerpt,
      technologies:val.attributes.technologies,
      images,
      categories,
    };
    return res;
  });

  return result;
}


