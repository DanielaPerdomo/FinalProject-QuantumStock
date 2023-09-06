
import React from "react";
import { ModalReport } from "./modalReport.jsx";



export const Report = () => {

    const { store, actions } = useContext(Context);

    const [report, setReport] = useState({

        email_client: " "

    })

    const handleInfo = (event) => {
        setReport({
            ...report,
            [event.target.name]: event.target.value //Fin de codigo de Jose
        })
    }
    const resetForm = () => {
        setReport({

            email_client: ""

        });

    };

    async function createReport(event) {
        event.preventDefault();

        try {
            const opts = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${store.token}`
                },
                body: JSON.stringify(report)

            };

            const resp = await fetch(process.env.BACKEND_URL + "api/report", opts);
            if (resp.ok) {
                resetForm();
                actions.getReport()
                toast.success('El reporte se creo exitosamente')
                return await resp.json();
            } else {
                return toast.error("El reporte no pudo crearse")
            }
        } catch (error) {

            console.error("There was an Error!!!", error);
        };
    };


    return (
        <>


            {store.reporte.map((item, index) => {

                return (
                    <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "minWidth": "5rem" }} key={index}>

                        <div className="card-header text-white">
                            <i className="fa-brands fa-product-hunt fa-fade"></i>
                            &ensp;{item.product_name}
                        </div>

                        <div className="card-body text-white">
                            <span className="d-flex"><i className="fa-solid fa-circle-info"></i>&ensp;Descripcion: &ensp; <span className="text-secondary">{item.description}</span></span><br />
                            <span className="d-flex"><i className="fa-solid fa-arrow-up-wide-short"></i>Cantidad: &ensp;<span className="text-secondary">{item.item}</span></span><br />
                            <span className="d-flex"><i className="fa-solid fa-money-bill-wave"></i>&ensp;Precio:&ensp;<span className="text-secondary">{item.price}</span></span><br />
                            <span className="d-flex"><i className="fa-solid fa-calendar-days"></i>&ensp;Fecha de Ingreso:&ensp;<span className="text-secondary">{item.admission_date}</span></span><br />
                        </div>

                        <div className="card-footer text-white">

                            <button type="button" className="btn btn-outline-danger m-2" data-bs-whatever="@mdo"
                            // onClick={() => {
                            //     handleDeleteProduct(item.id)
                            // }}
                            >
                                <i className="fa-regular fa-trash-can"></i>&ensp;Eliminar
                            </button>
                        </div>
                    </div>

                )
            })
            }






            <div className="container-fluid d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#createReport" data-bs-whatever="@mdo">
                    <i className="fa-solid fa-square-plus"></i>&ensp;Crear Reporte
                </button>
            </div>


            <ModalReport
                id={"createReport"}
                handleUpdate={createReport}
                handleInfo={handleInfo}
                data={report}
            />

            
        </>
    )

}