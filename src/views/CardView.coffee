class window.CardView extends Backbone.View
  className: 'card'

  template: _.template '<%= rankName %> of <%= suitName %>'

  initialize: -> @render()

  render: ->
    @$el.children().detach()
    @$el.addClass 'covered' unless @model.get 'revealed'
    if @$el.hasClass('covered') then loc = 'card-back.png' else loc = 'cards/'+@model.get('rankName').toString().toLowerCase()+'-'+@model.get('suitName').toLowerCase()+'.png'
    @$el.append('<image src="img/'+loc+'" height="100%" width="100%" margin="auto"></image>')