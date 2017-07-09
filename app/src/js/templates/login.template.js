export default function () {
    return `
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">Shooter Ready?</h3>
        </div>
        <div class="panel-body form-login-container">
            <form id="form-login" class="form-horizontal">
                <fieldset>
                    <div class="form-group">
                        <label for="form-login-name" class="col-xs-3 control-label">Your Name</label>
                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="form-login-name" placeholder="Your Name">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-lg-9 col-lg-offset-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>`;
}
