class FavesController < ApplicationController
  # before_action :set_fave, only: [:show, :update, :destroy]

  # GET /faves
  def index
    @faves = Fave.all

    render json: @faves
  end

  # GET /faves/1
  def show
    render json: @fave
  end

  # POST /faves
  def create
    @fave = Fave.new(fave_params)

    if @fave.save
      render json: @fave, status: :created, location: @fave
    else
      render json: @fave.errors, status: :unprocessable_entity
    end
  end

  # DELETE /faves/1
  def destroy
    @fave.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def fave
      @fave = Fave.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def fave_params
      params.require(:fave).permit(:user_id, :deck_id)
    end
end
