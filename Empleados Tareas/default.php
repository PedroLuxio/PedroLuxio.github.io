<h1>formulario de registro</h1>
<div class="cont-form">
<div class="row g-3 needs-validation">
  <div class="col-md-4">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" name="nombre" required>
  </div>
  <div class="col-md-4">
    <label for="apellido" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="apellido" name="apellido" required>
  </div>
  <div class="col-md-4">
    <label for="edad" class="form-label">Edad</label>
    <input type="number" class="form-control" id="edad" name="edad" required>
  </div>
  <div class="col-md-3">
  <label for="sexo" class="form-label">Sexo</label>
    <select class="form-select" id="sexo" name="sexo" required>
      <option selected disabled value="">Seleccione...</option>
      <option value="Femenino">Femenino</option>
      <option value="Masculino">Masculino</option>
    </select>
  </div>
  <div class="col-md-3">
  <label for="estado" class="form-label">Estado Civil</label>
    <select class="form-select" id="estado" name="estado" required>
      <option selected disabled value="">Seleccione...</option>
      <option value="Soltero(a)">Soltero(a)</option>
      <option value="Casado(a)">Casado(a)</option>
      <option value="Viudo(a)">Viudo(a)</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="sueldo" class="form-label">Sueldo</label>
    <input type="number" class="form-control" id="sueldo" name="sueldo" required>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit" id="submit">Grabar</button>
  </div>
</div>
</div>

<br>
<br>
    <h3>Listado de empleados</h3>
<br>  
<div class="cont-tbl">
<table class="table table-striped">
  <thead class="table-dark tbl2">
    <tr>
        <td>Nombre</td>
        <td>Apellido</td>
        <td>Edad</td>
        <td>Estado Civil</td>
        <td>Sexo</td>
        <td>Sueldo</td>
    </tr>    
  </thead>
  <tbody id="tbl-empleados">
    
  </tbody>
</table>


<table class="table table-striped">
  <thead class="table-dark tbl3">
    <tr>
        <td>Total Mujeres</td>
        <td>Total Hombres<br>Casados<br>Sueldo > 2500</td>
        <td>Total Mujeres<br>Viudas<br>Sueldo > 100</td>
        <td>Edad Promedio <br>Hombres</td>
    </tr>    
  </thead>
  <tbody>
  <tr>
        <td><div id="mujeres">0</div></td>
        <td><div id="hombres">0</div></td>
        <td><div id="viudas">0</div></td>
        <td><div id="promedio">0</div></td>
    </tr>    
  </tbody>
</table>

</div>