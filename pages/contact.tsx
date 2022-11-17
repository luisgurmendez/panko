import { Input, TextArea } from "../components/Input/Input";
import PageContainer from "../components/PageContainer"

const Contact = () => {

    return (
        <PageContainer>
            <div className="h-full flex-1">
                <span className="flex items-center flex-col justify-center space-y-4">
                    <h1 className="text-4xl font-bold">Contacto</h1>
                    <Input containerClassName="w-72" placeholder="Nombre" name="name" />
                    <Input containerClassName="w-72" placeholder="Email" name="email" />
                    <TextArea multiple={true} rows={8} containerClassName="w-72" placeholder="Consulta" />
                </span>
            </div>
        </PageContainer>
    )
}


export default Contact;
