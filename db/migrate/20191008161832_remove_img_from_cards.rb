class RemoveImgFromCards < ActiveRecord::Migration[6.0]
  def change

    remove_column :cards, :img, :string
  end
end
