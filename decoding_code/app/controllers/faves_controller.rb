class FavesController < ApplicationController
  before_action :set_deck, except: [:index]
  before_action :authorize_request

  # GET /faves
  def index
    @faves = @current_user.faves

    render json: @faves
  end

  # POST /faves
  def create
    @fave = Fave.new({
      user: @current_user,
      deck: @deck
    })

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
    def set_deck
      @deck = Deck.find(params[:deck_id])
    end

    # Only allow a trusted parameter "white list" through.
    def fave_params
      params.require(:fave).permit(:user_id, :deck_id)
    end
end
