const setupTags = recipes => {
    const allTags = {}

    recipes.forEach(recipe => {
        recipe.content.tags.forEach(tag => {
            if (allTags[tag])
                allTags[tag]++
            else
                allTags[tag] = 1
        })
    })
    const newTags = Object.entries(allTags).sort((a, b) => {
        return a[0].localeCompare(b[0])
    })
    return newTags
}

export default setupTags
