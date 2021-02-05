var data = {
    class: 'table-striped table-bordered table-condensed',
    columnas: [
        { leyenda: '', style: 'width:40px;', class: 'text-center'},
        { leyenda: 'ID', class: '', ordenable: true, columna: 'id', filtro: true },
        { leyenda: 'Nombre', ordenable: true, filtro: true, columna: 'name' },
        { leyenda: 'Usuario', ordenable: true, columna: 'username' },
        { leyenda: 'Correo', ordenable: true, columna: 'email' },
        { leyenda: 'Calle', ordenable: true, columna: 'address.street' },
        { leyenda: 'Suite', ordenable: true, columna: 'address.suite' },
        { leyenda: 'Ciudad', ordenable: true, columna: 'address.city' },
        { leyenda: 'Zipcode', ordenable: true, columna: 'address.zipcode' },
        { leyenda: 'Latitud', ordenable: true, columna: 'address.geo.lat' },
        { leyenda: 'Longitud', ordenable: true, columna: 'address.geo.lng' },
        { leyenda: 'Telefono', ordenable: true, columna: 'phone' },
        { leyenda: 'Sitio web', ordenable: true, columna: 'website' },
        { leyenda: 'Nombre compania', ordenable: true, columna: 'company.name' },
        { leyenda: 'Frase compania', ordenable: true, columna: 'company.catchPhrase' },
        { leyenda: 'Negocio compania', ordenable: true, columna: 'company.bs' },
    ],
    modelo: [
        { class: 'text-center', formato: function(tr, obj, valor){
            return anexGrid_dropdown({
                contenido: '<i class="glyphicon glyphicon-cog"></i>',
                class: 'btn btn-primary btn-xs',
                target: '_blank',
                id: 'editar-' + obj.id,
                data: [
                    { href: '#', contenido: 'Editar' },
                    { href: '#', contenido: 'Eliminar' }
                ]
            });
            }
        },
        { propiedad: 'ID' },
        { propiedad: 'Nombre' },
        { propiedad: 'Usuario' },
        { propiedad: 'Correo' },
        { propiedad: 'Calle' },
        { propiedad: 'Suite' },
        { propiedad: 'Ciudad' },
        { propiedad: 'Zipcode' },
        { propiedad: 'Latitud' },
        { propiedad: 'Longitud' },
        { propiedad: 'Telefono' },
        { propiedad: 'Sitio web' },
        { propiedad: 'Nombre compania' },
        { propiedad: 'Frase de compania' },
        { propiedad: 'Negocio compania' },
    ],
    url: 'https://jsonplaceholder.typicode.com/users',
    paginable: true,
    filtrable: true,
    limite: [20, 60, 100],
    columna: 'id',
    columna_orden: 'DESC'
};

$(document).ready(function(){
    var grid = $("#list").anexGrid(data);
})