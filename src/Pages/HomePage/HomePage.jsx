import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'
import "./HomePage.css"

export default function HomePage() {
    return (
        <div>
            <div>
                <CardGroup>
                    <Card>
                        <CardImg top height="280" src="/ds-min.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{ marginTop: "0.62em" }} tag="h5">Software Developer</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Yazılım Geliştirici</CardSubtitle>
                            <CardText style={{ marginTop: "1.1em" }}>Yazılım geliştiricisi olarak başarılı bir kariyer sahibi olmak ister misiniz? </CardText>
                            <Button style={{ marginBottom: "1em" }, { marginTop: "1.3em" }} color="success" tag={Link} to="/jobadvert/39/details">Örnek bir ilana git</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top height="280" src="LEJ7HJ5BEA.2e16d0ba.fill-600x400.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{ marginTop: "0.62em" }} tag="h5">Software Architect</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Yazılım Mimarı</CardSubtitle>
                            <CardText style={{ marginTop: "1.1em" }}>Yazılım mimarı alanında çalışmak mı istiyorsun? Bu alanda kariyer sahibi olmak istersen örnek bir ilana bakabilirsin.</CardText>
                            <Button style={{ marginBottom: "1em" }} color="primary" tag={Link} to="/jobadvert/51/details">Örnek bir ilana git</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top height="280" src="/fddff.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{ marginTop: "0.62em" }} tag="h5">Intern</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Stajyer</CardSubtitle>
                            <CardText style={{ marginTop: "1em" }}>Şirketlerde stajyer olarak çalışmak istiyorsan ve iş hayatında bir adım daha önde olmak istiyorsan tam sana göre ilanlar burada.</CardText>
                            <Button color="danger" tag={Link} to="/jobadvert/53/details">Örnek bir ilana git</Button>
                        </CardBody>
                    </Card>
                </CardGroup><br/>
                <CardGroup>
                    <Card>
                        <CardImg width="100%" top src="rm22-kwan-005.jpg" alt="Card image cap" />
                    </Card>
                </CardGroup><br/><br/>
                <CardGroup>
                    <Card>
                        <CardImg top src="/oneri1.png" alt="Card image cap" />
                    </Card>
                    <Card><br/>
                        <Container>
                            <CardTitle ><h4><b>Özgeçmişinizi öne çıkarabilecek 5 öneri</b></h4></CardTitle><br/>
                            <CardText><h5>1- Özgeçmişiniz dolu olsun: Özgeçmişinizi oluştururken tüm alanları mümkün olduğunca size ait bilgilerle doldurun</h5></CardText><br/>
                            <CardText><h5>2- Özgeçmişiniz başvurduğunuz ilanlara uygun olsun: Özgeçmişinizi hazırlarken başvuru yapacağınız ilanları göz önüne alarak düzenleme yapmanız yararınıza olacaktır. </h5></CardText><br/>
                            <CardText><h5>3- Sizi diğer adaylardan ayrıştıran unsurları yazın: Bazen ofis programlarını bilme düzeyiniz, bazen bildiğiniz bir yabancı dil, bazen de sahip olduğunuz bir iş deneyimi sizi diğer adaylardan ayrıştıran bir unsur olabilir.</h5></CardText><br/>
                            <CardText><h5>4- İş deneyimlerinizin detayını yazmayı unutmayın.</h5></CardText>
                            <CardText><h5>5- Eğitim ve sertifikalarınızı mutlaka yazın.</h5></CardText>
                        </Container>
                    </Card>
                </CardGroup><br/><br/>

                <CardGroup>
                    <Card>
                        <CardImg top src="/indir.png" alt="Card image cap" />
                    </Card>
                    <Card><br/>
                        <Container>
                            <CardTitle><h5><b>Kendinizi yazılım konusunda geliştirmeniz için tavsiye ettiğimiz platform. </b><a href="https://kodlama.io/">Buraya Tıklayıp Bakabilirsiniz</a></h5></CardTitle>
                            <CardText><h5>Mutlaka göz atmanızı öneririz. Engin Demiroğ hocama sonsuz teşekkürler.</h5></CardText>
                        </Container>
                    </Card>
                </CardGroup>
            </div>

        </div>
    )
}
