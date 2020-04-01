const path = require('path');

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const category = path.resolve('src/templates/category.js');
  const allocation = path.resolve('src/templates/allocation.js');

  const res = await graphql(`
    {
      structure {
        categoriesPerArea (parent_area: "mimis") {
          category_name
          allocation_names
        }
      }
    }
  `)
  
  // console.log({res})
  if(res.errors){
    throw res.errors;
  }

  // const {data} = res
  // console.log({data})
  const {categoriesPerArea} = res.data.structure
  const category_names = categoriesPerArea.map(k => k.category_name)
  // console.log({category_names})
  // console.log({categoriesPerArea})

  categoriesPerArea.forEach(data => {
    const {category_name, allocation_names} = data
    // console.log({data, allocation_names})
    createPage({
      path: `/${category_name}`,
      component: category,
      context: {category_names, category_name, allocation_names}
    })

    allocation_names.forEach(allocation_name => {
      createPage({
        path: `/${category_name}/${allocation_name}`,
        component: allocation,
        context: {category_names, category_name, allocation_names, allocation_name}
      })
    })

  });
}


// const categories = [
//   'north_america',
//   'south_america',
//   'europe',
//   'russia_and_cis',
//   'middle_east',
//   'africa',
//   'south_asia',
//   'east_asia',
//   'oceania',
// ]


// exports.createPages = ({graphql, actions}) => {
//   const {createPage} = actions;
//   const bookTemplate = path.resolve('src/templates/bookTemplate.js');

//   return graphql(`
//     {
//       allBook {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//   `).then((result) => {
//     if(result.errors){
//       throw result.errors;
//     }

//     result.data.allBook.edges.forEach(book =>{
//       createPage({
//         path: `/book/${book.node.id}`,
//         component: bookTemplate,
//         context: {bookId: book.node.id}
//       })
//     });
//   })
