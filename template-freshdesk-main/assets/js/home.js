$(function () {
    $("#headerContent").load(`/${dir_url}views/header.html`);
    $("#navContent").load(`/${dir_url}views/nav.html`);
    $("#bodyContent").load(`/${dir_url}views/body.html`, addBodyContent);
    $("#footerContent").load(`/${dir_url}views/footer.html`);
    $("#copyrightContent").load(`/${dir_url}views/copyright.html`);
});

function addBodyContent() {
    let category = config.data.category;
    category.map((value) => {
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

    category.map((value) => {
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

    category.map((value) => {
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
}