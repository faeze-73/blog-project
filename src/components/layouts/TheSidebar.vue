<template>
  <!--Side Widgets-->
  <div class="col-lg-4">
    <!-- Search Widgets-->
    <div class="card mb-4">
      <div class="card-header">Search</div>
      <div class="card-body">
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Enter search term..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button class="btn btn-primary" id="button-search" type="button">
            Go!
          </button>
        </div>
      </div>
    </div>

    <!-- Categories Widgets-->
    <div class="card mb-4">
      <div class="card-header">Categories</div>

      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Html</a></li>
              <li><a href="#">Freebies</a></li>
            </ul>
          </div>

          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">Css</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <!--Side Widgets-->
    <div class="card mb-4">
      <div class="card-header">Side Widget</div>
      <div class="card-body">You can put anything you want inside of these side widgets</div>
    </div>
  </div>
</template>
