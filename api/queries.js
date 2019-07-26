module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM subcategories, categories c
                WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    `

    /*
    categoryWithChildren: `    
    WITH RECURSIVE subcategories AS (
        SELECT id FROM categories WHERE id = ?
         UNION ALL
        SELECT c.id FROM categories c
         JOIN subcategories s ON s.id = c.parentId 
        )
        SELECT id FROM subcategories    
    `
    */
}