const baseData = require('../../fixtures/shared.json')
describe('About component', () => {
  beforeEach(() => {
    cy.visit(baseData.host + '/about')
  })

  it('renders AboutCard component correctly', () => {
    cy.get('[name="text-10-10-1"]')
        .should('have.css', 'height', '236px');
  })

  it('displays the correct title', () => {
    cy.get('[name="text-10-10-1"]').find('h5').should('have.text', 'درباره ما')
    cy.get('[name="text-10-10-2"]').find('h5').should('have.text', 'هدف ما')
    cy.get('[name="text-10-10-3"]').find('h5').should('have.text', 'چشم انداز ما')
  })

  it('displays the correct text', () => {
    cy.get('[name="text-10-10-1"]').find('p').should('have.text', "صنعت یاب اولین وبسایت برون‌سپاری ایرانی در سطح شرکت های متوسط و بزرگ است که کار خود را از سال 1401 شروع کرد. امکانات صنعت یاب با ایجاد محیطی امن برای شرکت ها ارتباطات بین مجریان و خریداران را بهبود می‌بخشد. خریداران (افرادی که نیاز دارند پروژه‌ای را برون‌سپاری کنند) درخواستشان را به صورت خصوصی یا عمومی ثبت می‌کنند تا توسط مجریان (شرکت هایی که توانایی و تخصص انجام آن پروژه را دارند) انجام شود.")
    cy.get('[name="text-10-10-2"]').find('p').should('have.text', "با بهره گیری از فناوری، برای شرکت ها تجربه ای خوشایند از برون سپاری پروژه ها را ایجاد می‌کنیم. می‌خواهیم به شرکت های ایرانی کمک کنیم تا با قدرت تکنولوژی توانمندی خود را بیشتر و بهتر به معرض نمایش بگذارند. کمک به گذار از اقتصاد سنتی به اقتصاد دیجیتال، همسو با روندهای جهانی، مأموریت ما برای گسترش بازاری به وسعت ایران برای همه شرکت هاست.")
    cy.get('[name="text-10-10-3"]').find('p').should('have.text', "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی")
  })

  // it('displays the correct icon', () => {
  //   cy.get('[name="text-10-10-1"]').find('[name="v-icon__svg"]').should('have.icon', "mdi-information")
  //   cy.get('[name="text-10-10-2"]').find('p').should('have.text', "با بهره گیری از فناوری، برای شرکت ها تجربه ای خوشایند از برون سپاری پروژه ها را ایجاد می‌کنیم. می‌خواهیم به شرکت های ایرانی کمک کنیم تا با قدرت تکنولوژی توانمندی خود را بیشتر و بهتر به معرض نمایش بگذارند. کمک به گذار از اقتصاد سنتی به اقتصاد دیجیتال، همسو با روندهای جهانی، مأموریت ما برای گسترش بازاری به وسعت ایران برای همه شرکت هاست.")
  //   cy.get('[name="text-10-10-3"]').find('p').should('have.text', "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی")
  //
  // })

  it('is styled with the correct background image', () => {
    cy.get('#card').should('have.css', 'background-image', 'url("http://localhost:8080/img/about-us.e16c01ad.svg")')
  })

  it('is shaped with a circle', () => {
    cy.get('.circle').should('have.css', 'border-radius', '100%')
  })
  it('has the correct background color for the circle', () => {
    cy.get('.circle').should('have.css', 'background-color', 'rgb(59, 11, 249)')
  })
  it('has the correct height and width for the circle', () => {
    cy.get('.circle').should('have.css', 'height', '112px')
    cy.get('.circle').should('have.css', 'width', '112px')
  })
  it('has the correct font size for the circle', () => {
    cy.get('.circle').should('have.css', 'font-size', '24px')
  })

})
