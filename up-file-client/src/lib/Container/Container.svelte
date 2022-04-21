<script>

    function getFile(file) {
                console.log(file);
    }

</script>


<div class="flex justify-center items-center h-full">
 <form action="/action_page.php">
    <div class="wrapper">
        <div class="file-upload">
          <input type="file" on:change={getFile} />
          <i class="fa fa-arrow-up"></i>
        </div>
      </div>
</form>

</div>


<style >
    .wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper .file-upload {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #FFFFFF;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #2590EB 50%, #FFFFFF 50%);
  background-size: 100% 200%;
  transition: all 1s;
  color: #FFFFFF;
  font-size: 100px;
}
.wrapper .file-upload input[type=file] {
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
.wrapper .file-upload:hover {
  background-position: 0 -100%;
  color: #2590EB;
}
</style>