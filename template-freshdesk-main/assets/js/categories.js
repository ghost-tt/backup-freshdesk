$(function () {
    $("#headerContent").load(`/${dir_url}views/header.html`);
    $("#navContent").load(`/${dir_url}views/nav.html`);
    $("#bodyContent").load(`/${dir_url}views/category.html`, addBodyContent);
    $("#footerContent").load(`/${dir_url}views/footer.html`);
    $("#copyrightContent").load(`/${dir_url}views/copyright.html`);
});

function addBodyContent() {
    let queryParams = Object.fromEntries(new URLSearchParams(location.search));
    let filteredCategories = config.data.category.filter((value) => {
        return value.id.toLowerCase() === queryParams.article.toLowerCase()
    })

    filteredCategories.map((value) => {
        $("#solutions-index-home")
            .append(
                `
                <div class="content__section">
                    <h3 class="heading"><a>${value.main_title}</a></h3>
                    <div class="article-container" id=${value.id}></div>
                </div>
            `
        );
    });

    filteredCategories.map((value) => {
        value.sub_category.map((articles_block) => {
            $(`#${value.id}`)
                .append(
                    `
                    <section class="article-block">
                        <div class="list__lead">
                            <a href="faqlist.html"> ${articles_block.title} <span class="item-count">${articles_block.articles.length}</span></a>
                        </div>
                        <ul id=${articles_block.id}></ul>
                        <a class="see-more" href="faqlist.html?article=${value.id}&faqlist=${articles_block.id}">See all ${articles_block.articles.length} articles</a>
                    </section>
                `
            );
        })
    });

    filteredCategories.map((value) => {
        value.sub_category.map((articles_block) => {
            articles_block.articles.map((article, index) => {
                if(index > 4) { return; }
                $(`#${articles_block.id}`)
                .append(
                    `
                    <li>
                        <i style='font-size:24px' class='fas'>&#xf518;</i>
                        <div class="ellipsis">
                            <a href="solutions.html?article=${value.id}&faqlist=${articles_block.id}&question=${article.id}">${article.question}</a>
                        </div>
                    </li>
                    `
                ); 
            })
        })
    })


    /* filteredFaq.map((value) => {
        value.sub_category.map((category) => {
            $("#category-index-home")
                .append(
                    `
                    <div class="content__section">
                        <h3 class="heading"><a>${category.main_title}</a></h3>
                        <div class="article-container" id=${category.id}></div>
                    </div>
                `
            );
        });
    )}
    console.log(filteredFaq) */
    /* IMPORTANT */
    /* let filteredQuestion = filteredCategory[0].articles.filter((value) => {
        return value.id.toLowerCase() === queryParams.question.toLowerCase()
    })

    console.log(filteredQuestion) */
}